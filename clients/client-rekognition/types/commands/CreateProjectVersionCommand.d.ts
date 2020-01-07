import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { CreateProjectVersionRequest, CreateProjectVersionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateProjectVersionCommandInput = CreateProjectVersionRequest;
export declare type CreateProjectVersionCommandOutput = CreateProjectVersionResponse & __MetadataBearer;
export declare class CreateProjectVersionCommand extends $Command<CreateProjectVersionCommandInput, CreateProjectVersionCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: CreateProjectVersionCommandInput;
    constructor(input: CreateProjectVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateProjectVersionCommandInput, CreateProjectVersionCommandOutput>;
    private serialize;
    private deserialize;
}
