import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetAccountSettingsRequest, GetAccountSettingsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAccountSettingsCommandInput = GetAccountSettingsRequest;
export declare type GetAccountSettingsCommandOutput = GetAccountSettingsResult & __MetadataBearer;
export declare class GetAccountSettingsCommand extends $Command<GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: GetAccountSettingsCommandInput;
    constructor(input: GetAccountSettingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
