import {
  BuildHandler,
  BuildHandlerArguments,
  BuildMiddleware,
  MetadataBearer,
  BuildHandlerOutput
} from "@aws-sdk/types";

export type InputDefaultArgs<Input extends object> = {
  [field in keyof Input]?: Input[field];
};

export function inputDefaultMiddleware<Input extends object>(
  inputBag: InputDefaultArgs<Input>
): BuildMiddleware<any, any> {
  return <Output extends MetadataBearer>(
    next: BuildHandler<any, Output>
  ): BuildHandler<any, Output> => async (
    args: BuildHandlerArguments<any>
  ): Promise<BuildHandlerOutput<Output>> => {
    const input = { ...args.input };

    for (const field of Object.keys(inputBag)) {
      if (!(field in input)) {
        input[field] = inputBag[field as keyof Input];
      }
    }

    return next({
      ...args,
      input
    });
  };
}
