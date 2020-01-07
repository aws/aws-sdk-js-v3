import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { PutAccountSettingRequest, PutAccountSettingResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutAccountSettingCommandInput = PutAccountSettingRequest;
export declare type PutAccountSettingCommandOutput = PutAccountSettingResponse & __MetadataBearer;
export declare class PutAccountSettingCommand extends $Command<PutAccountSettingCommandInput, PutAccountSettingCommandOutput, ECSClientResolvedConfig> {
    readonly input: PutAccountSettingCommandInput;
    constructor(input: PutAccountSettingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutAccountSettingCommandInput, PutAccountSettingCommandOutput>;
    private serialize;
    private deserialize;
}
