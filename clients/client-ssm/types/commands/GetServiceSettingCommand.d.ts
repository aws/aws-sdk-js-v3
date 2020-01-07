import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetServiceSettingRequest, GetServiceSettingResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetServiceSettingCommandInput = GetServiceSettingRequest;
export declare type GetServiceSettingCommandOutput = GetServiceSettingResult & __MetadataBearer;
export declare class GetServiceSettingCommand extends $Command<GetServiceSettingCommandInput, GetServiceSettingCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetServiceSettingCommandInput;
    constructor(input: GetServiceSettingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetServiceSettingCommandInput, GetServiceSettingCommandOutput>;
    private serialize;
    private deserialize;
}
