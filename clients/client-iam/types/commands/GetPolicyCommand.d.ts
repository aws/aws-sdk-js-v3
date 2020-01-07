import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetPolicyRequest, GetPolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetPolicyCommandInput = GetPolicyRequest;
export declare type GetPolicyCommandOutput = GetPolicyResponse & __MetadataBearer;
export declare class GetPolicyCommand extends $Command<GetPolicyCommandInput, GetPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetPolicyCommandInput;
    constructor(input: GetPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPolicyCommandInput, GetPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
