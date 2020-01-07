import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { PutRolePolicyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutRolePolicyCommandInput = PutRolePolicyRequest;
export declare type PutRolePolicyCommandOutput = __MetadataBearer;
export declare class PutRolePolicyCommand extends $Command<PutRolePolicyCommandInput, PutRolePolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: PutRolePolicyCommandInput;
    constructor(input: PutRolePolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutRolePolicyCommandInput, PutRolePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
