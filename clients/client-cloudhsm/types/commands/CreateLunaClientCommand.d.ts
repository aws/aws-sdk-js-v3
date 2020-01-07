import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { CreateLunaClientRequest, CreateLunaClientResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateLunaClientCommandInput = CreateLunaClientRequest;
export declare type CreateLunaClientCommandOutput = CreateLunaClientResponse & __MetadataBearer;
export declare class CreateLunaClientCommand extends $Command<CreateLunaClientCommandInput, CreateLunaClientCommandOutput, CloudHSMClientResolvedConfig> {
    readonly input: CreateLunaClientCommandInput;
    constructor(input: CreateLunaClientCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLunaClientCommandInput, CreateLunaClientCommandOutput>;
    private serialize;
    private deserialize;
}
