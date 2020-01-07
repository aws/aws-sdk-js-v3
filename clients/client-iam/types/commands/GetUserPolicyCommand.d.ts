import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetUserPolicyRequest, GetUserPolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetUserPolicyCommandInput = GetUserPolicyRequest;
export declare type GetUserPolicyCommandOutput = GetUserPolicyResponse & __MetadataBearer;
export declare class GetUserPolicyCommand extends $Command<GetUserPolicyCommandInput, GetUserPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetUserPolicyCommandInput;
    constructor(input: GetUserPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetUserPolicyCommandInput, GetUserPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
