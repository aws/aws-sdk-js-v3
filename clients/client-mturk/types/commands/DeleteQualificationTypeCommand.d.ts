import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { DeleteQualificationTypeRequest, DeleteQualificationTypeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteQualificationTypeCommandInput = DeleteQualificationTypeRequest;
export declare type DeleteQualificationTypeCommandOutput = DeleteQualificationTypeResponse & __MetadataBearer;
export declare class DeleteQualificationTypeCommand extends $Command<DeleteQualificationTypeCommandInput, DeleteQualificationTypeCommandOutput, MTurkClientResolvedConfig> {
    readonly input: DeleteQualificationTypeCommandInput;
    constructor(input: DeleteQualificationTypeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteQualificationTypeCommandInput, DeleteQualificationTypeCommandOutput>;
    private serialize;
    private deserialize;
}
