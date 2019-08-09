import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { InternalServerError } from "./InternalServerError";
export type DescribeContainerExceptionsUnion =
  | ContainerNotFoundException
  | InternalServerError;
