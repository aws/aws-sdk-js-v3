import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetResourcePolicyRequest, GetResourcePolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetResourcePolicyCommandInput = GetResourcePolicyRequest;
export declare type GetResourcePolicyCommandOutput = GetResourcePolicyResponse & __MetadataBearer;
export declare class GetResourcePolicyCommand extends $Command<GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetResourcePolicyCommandInput;
    constructor(input: GetResourcePolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
