import { QueryForecastCommandInput, QueryForecastCommandOutput } from "../commands/QueryForecastCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare function serializeAws_json1_1QueryForecastCommand(input: QueryForecastCommandInput, context: __SerdeContext): Promise<__HttpRequest>;
export declare function deserializeAws_json1_1QueryForecastCommand(output: __HttpResponse, context: __SerdeContext): Promise<QueryForecastCommandOutput>;
