import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DeleteAccountSettingRequest, DeleteAccountSettingResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAccountSettingCommandInput = DeleteAccountSettingRequest;
export declare type DeleteAccountSettingCommandOutput = DeleteAccountSettingResponse & __MetadataBearer;
export declare class DeleteAccountSettingCommand extends $Command<DeleteAccountSettingCommandInput, DeleteAccountSettingCommandOutput, ECSClientResolvedConfig> {
    readonly input: DeleteAccountSettingCommandInput;
    constructor(input: DeleteAccountSettingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAccountSettingCommandInput, DeleteAccountSettingCommandOutput>;
    private serialize;
    private deserialize;
}
