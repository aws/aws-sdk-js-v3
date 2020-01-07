import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetAccountPasswordPolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAccountPasswordPolicyCommandInput = {};
export declare type GetAccountPasswordPolicyCommandOutput = GetAccountPasswordPolicyResponse & __MetadataBearer;
export declare class GetAccountPasswordPolicyCommand extends $Command<GetAccountPasswordPolicyCommandInput, GetAccountPasswordPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetAccountPasswordPolicyCommandInput;
    constructor(input: GetAccountPasswordPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAccountPasswordPolicyCommandInput, GetAccountPasswordPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
