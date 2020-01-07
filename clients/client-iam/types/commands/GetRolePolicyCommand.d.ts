import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetRolePolicyRequest, GetRolePolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRolePolicyCommandInput = GetRolePolicyRequest;
export declare type GetRolePolicyCommandOutput = GetRolePolicyResponse & __MetadataBearer;
export declare class GetRolePolicyCommand extends $Command<GetRolePolicyCommandInput, GetRolePolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetRolePolicyCommandInput;
    constructor(input: GetRolePolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRolePolicyCommandInput, GetRolePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
