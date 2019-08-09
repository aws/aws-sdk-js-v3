import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { ImageNotFoundException } from "./ImageNotFoundException";
export type DescribeImagesExceptionsUnion =
  | ServerException
  | InvalidParameterException
  | RepositoryNotFoundException
  | ImageNotFoundException;
