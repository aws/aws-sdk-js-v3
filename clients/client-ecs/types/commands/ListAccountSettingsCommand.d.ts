import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { ListAccountSettingsRequest, ListAccountSettingsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAccountSettingsCommandInput = ListAccountSettingsRequest;
export declare type ListAccountSettingsCommandOutput = ListAccountSettingsResponse & __MetadataBearer;
export declare class ListAccountSettingsCommand extends $Command<ListAccountSettingsCommandInput, ListAccountSettingsCommandOutput, ECSClientResolvedConfig> {
    readonly input: ListAccountSettingsCommandInput;
    constructor(input: ListAccountSettingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAccountSettingsCommandInput, ListAccountSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
