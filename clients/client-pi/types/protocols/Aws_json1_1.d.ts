import { DescribeDimensionKeysCommandInput, DescribeDimensionKeysCommandOutput } from "../commands/DescribeDimensionKeysCommand";
import { GetResourceMetricsCommandInput, GetResourceMetricsCommandOutput } from "../commands/GetResourceMetricsCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare function serializeAws_json1_1DescribeDimensionKeysCommand(input: DescribeDimensionKeysCommandInput, context: __SerdeContext): Promise<__HttpRequest>;
export declare function serializeAws_json1_1GetResourceMetricsCommand(input: GetResourceMetricsCommandInput, context: __SerdeContext): Promise<__HttpRequest>;
export declare function deserializeAws_json1_1DescribeDimensionKeysCommand(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDimensionKeysCommandOutput>;
export declare function deserializeAws_json1_1GetResourceMetricsCommand(output: __HttpResponse, context: __SerdeContext): Promise<GetResourceMetricsCommandOutput>;
