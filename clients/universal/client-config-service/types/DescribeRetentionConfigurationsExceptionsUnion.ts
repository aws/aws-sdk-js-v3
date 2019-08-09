import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { NoSuchRetentionConfigurationException } from "./NoSuchRetentionConfigurationException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
export type DescribeRetentionConfigurationsExceptionsUnion =
  | InvalidParameterValueException
  | NoSuchRetentionConfigurationException
  | InvalidNextTokenException;
