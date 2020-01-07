import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";
import { CreateCaseRequest, CreateCaseResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateCaseCommandInput = CreateCaseRequest;
export declare type CreateCaseCommandOutput = CreateCaseResponse & __MetadataBearer;
export declare class CreateCaseCommand extends $Command<CreateCaseCommandInput, CreateCaseCommandOutput, SupportClientResolvedConfig> {
    readonly input: CreateCaseCommandInput;
    constructor(input: CreateCaseCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SupportClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCaseCommandInput, CreateCaseCommandOutput>;
    private serialize;
    private deserialize;
}
