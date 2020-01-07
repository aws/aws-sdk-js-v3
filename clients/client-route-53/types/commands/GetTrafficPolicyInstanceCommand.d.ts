import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetTrafficPolicyInstanceRequest, GetTrafficPolicyInstanceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetTrafficPolicyInstanceCommandInput = GetTrafficPolicyInstanceRequest;
export declare type GetTrafficPolicyInstanceCommandOutput = GetTrafficPolicyInstanceResponse & __MetadataBearer;
export declare class GetTrafficPolicyInstanceCommand extends $Command<GetTrafficPolicyInstanceCommandInput, GetTrafficPolicyInstanceCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetTrafficPolicyInstanceCommandInput;
    constructor(input: GetTrafficPolicyInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTrafficPolicyInstanceCommandInput, GetTrafficPolicyInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
