import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { CreateHITTypeRequest, CreateHITTypeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateHITTypeCommandInput = CreateHITTypeRequest;
export declare type CreateHITTypeCommandOutput = CreateHITTypeResponse & __MetadataBearer;
export declare class CreateHITTypeCommand extends $Command<CreateHITTypeCommandInput, CreateHITTypeCommandOutput, MTurkClientResolvedConfig> {
    readonly input: CreateHITTypeCommandInput;
    constructor(input: CreateHITTypeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateHITTypeCommandInput, CreateHITTypeCommandOutput>;
    private serialize;
    private deserialize;
}
