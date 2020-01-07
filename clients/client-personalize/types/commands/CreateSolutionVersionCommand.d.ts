import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { CreateSolutionVersionRequest, CreateSolutionVersionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSolutionVersionCommandInput = CreateSolutionVersionRequest;
export declare type CreateSolutionVersionCommandOutput = CreateSolutionVersionResponse & __MetadataBearer;
export declare class CreateSolutionVersionCommand extends $Command<CreateSolutionVersionCommandInput, CreateSolutionVersionCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: CreateSolutionVersionCommandInput;
    constructor(input: CreateSolutionVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSolutionVersionCommandInput, CreateSolutionVersionCommandOutput>;
    private serialize;
    private deserialize;
}
