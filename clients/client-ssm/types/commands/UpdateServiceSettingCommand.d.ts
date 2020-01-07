import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { UpdateServiceSettingRequest, UpdateServiceSettingResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateServiceSettingCommandInput = UpdateServiceSettingRequest;
export declare type UpdateServiceSettingCommandOutput = UpdateServiceSettingResult & __MetadataBearer;
export declare class UpdateServiceSettingCommand extends $Command<UpdateServiceSettingCommandInput, UpdateServiceSettingCommandOutput, SSMClientResolvedConfig> {
    readonly input: UpdateServiceSettingCommandInput;
    constructor(input: UpdateServiceSettingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateServiceSettingCommandInput, UpdateServiceSettingCommandOutput>;
    private serialize;
    private deserialize;
}
