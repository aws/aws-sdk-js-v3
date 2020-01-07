import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { CreateExclusionsPreviewRequest, CreateExclusionsPreviewResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateExclusionsPreviewCommandInput = CreateExclusionsPreviewRequest;
export declare type CreateExclusionsPreviewCommandOutput = CreateExclusionsPreviewResponse & __MetadataBearer;
export declare class CreateExclusionsPreviewCommand extends $Command<CreateExclusionsPreviewCommandInput, CreateExclusionsPreviewCommandOutput, InspectorClientResolvedConfig> {
    readonly input: CreateExclusionsPreviewCommandInput;
    constructor(input: CreateExclusionsPreviewCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateExclusionsPreviewCommandInput, CreateExclusionsPreviewCommandOutput>;
    private serialize;
    private deserialize;
}
