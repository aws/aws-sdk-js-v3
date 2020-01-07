import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { CreateHITWithHITTypeRequest, CreateHITWithHITTypeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateHITWithHITTypeCommandInput = CreateHITWithHITTypeRequest;
export declare type CreateHITWithHITTypeCommandOutput = CreateHITWithHITTypeResponse & __MetadataBearer;
export declare class CreateHITWithHITTypeCommand extends $Command<CreateHITWithHITTypeCommandInput, CreateHITWithHITTypeCommandOutput, MTurkClientResolvedConfig> {
    readonly input: CreateHITWithHITTypeCommandInput;
    constructor(input: CreateHITWithHITTypeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateHITWithHITTypeCommandInput, CreateHITWithHITTypeCommandOutput>;
    private serialize;
    private deserialize;
}
