import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { CreateProjectRequest, CreateProjectResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateProjectCommandInput = CreateProjectRequest;
export declare type CreateProjectCommandOutput = CreateProjectResponse & __MetadataBearer;
export declare class CreateProjectCommand extends $Command<CreateProjectCommandInput, CreateProjectCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: CreateProjectCommandInput;
    constructor(input: CreateProjectCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateProjectCommandInput, CreateProjectCommandOutput>;
    private serialize;
    private deserialize;
}
