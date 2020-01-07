import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetTrafficPolicyInstanceCountRequest, GetTrafficPolicyInstanceCountResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetTrafficPolicyInstanceCountCommandInput = GetTrafficPolicyInstanceCountRequest;
export declare type GetTrafficPolicyInstanceCountCommandOutput = GetTrafficPolicyInstanceCountResponse & __MetadataBearer;
export declare class GetTrafficPolicyInstanceCountCommand extends $Command<GetTrafficPolicyInstanceCountCommandInput, GetTrafficPolicyInstanceCountCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetTrafficPolicyInstanceCountCommandInput;
    constructor(input: GetTrafficPolicyInstanceCountCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTrafficPolicyInstanceCountCommandInput, GetTrafficPolicyInstanceCountCommandOutput>;
    private serialize;
    private deserialize;
}
