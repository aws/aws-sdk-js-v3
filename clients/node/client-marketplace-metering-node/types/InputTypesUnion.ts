import { BatchMeterUsageInput } from "./BatchMeterUsageInput";
import { MeterUsageInput } from "./MeterUsageInput";
import { RegisterUsageInput } from "./RegisterUsageInput";
import { ResolveCustomerInput } from "./ResolveCustomerInput";
export type InputTypesUnion =
  | BatchMeterUsageInput
  | MeterUsageInput
  | RegisterUsageInput
  | ResolveCustomerInput;
