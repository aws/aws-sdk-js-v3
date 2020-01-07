import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ResetServiceSettingRequest, ResetServiceSettingResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ResetServiceSettingCommandInput = ResetServiceSettingRequest;
export declare type ResetServiceSettingCommandOutput = ResetServiceSettingResult & __MetadataBearer;
export declare class ResetServiceSettingCommand extends $Command<ResetServiceSettingCommandInput, ResetServiceSettingCommandOutput, SSMClientResolvedConfig> {
    readonly input: ResetServiceSettingCommandInput;
    constructor(input: ResetServiceSettingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetServiceSettingCommandInput, ResetServiceSettingCommandOutput>;
    private serialize;
    private deserialize;
}
