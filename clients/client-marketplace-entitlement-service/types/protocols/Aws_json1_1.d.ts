import { GetEntitlementsCommandInput, GetEntitlementsCommandOutput } from "../commands/GetEntitlementsCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare function serializeAws_json1_1GetEntitlementsCommand(input: GetEntitlementsCommandInput, context: __SerdeContext): Promise<__HttpRequest>;
export declare function deserializeAws_json1_1GetEntitlementsCommand(output: __HttpResponse, context: __SerdeContext): Promise<GetEntitlementsCommandOutput>;
