import { ResourceContentionFault } from "./ResourceContentionFault";
import { ResourceInUseFault } from "./ResourceInUseFault";
export type DeleteTagsExceptionsUnion =
  | ResourceContentionFault
  | ResourceInUseFault;
