import { CreateDetectorModelInput } from "./CreateDetectorModelInput";
import { CreateInputInput } from "./CreateInputInput";
import { DeleteDetectorModelInput } from "./DeleteDetectorModelInput";
import { DeleteInputInput } from "./DeleteInputInput";
import { DescribeDetectorModelInput } from "./DescribeDetectorModelInput";
import { DescribeInputInput } from "./DescribeInputInput";
import { DescribeLoggingOptionsInput } from "./DescribeLoggingOptionsInput";
import { ListDetectorModelVersionsInput } from "./ListDetectorModelVersionsInput";
import { ListDetectorModelsInput } from "./ListDetectorModelsInput";
import { ListInputsInput } from "./ListInputsInput";
import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { PutLoggingOptionsInput } from "./PutLoggingOptionsInput";
import { TagResourceInput } from "./TagResourceInput";
import { UntagResourceInput } from "./UntagResourceInput";
import { UpdateDetectorModelInput } from "./UpdateDetectorModelInput";
import { UpdateInputInput } from "./UpdateInputInput";
export type InputTypesUnion =
  | CreateDetectorModelInput
  | CreateInputInput
  | DeleteDetectorModelInput
  | DeleteInputInput
  | DescribeDetectorModelInput
  | DescribeInputInput
  | DescribeLoggingOptionsInput
  | ListDetectorModelVersionsInput
  | ListDetectorModelsInput
  | ListInputsInput
  | ListTagsForResourceInput
  | PutLoggingOptionsInput
  | TagResourceInput
  | UntagResourceInput
  | UpdateDetectorModelInput
  | UpdateInputInput;
