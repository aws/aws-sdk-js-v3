import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { DeleteHITRequest, DeleteHITResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteHITCommandInput = DeleteHITRequest;
export declare type DeleteHITCommandOutput = DeleteHITResponse & __MetadataBearer;
export declare class DeleteHITCommand extends $Command<DeleteHITCommandInput, DeleteHITCommandOutput, MTurkClientResolvedConfig> {
    readonly input: DeleteHITCommandInput;
    constructor(input: DeleteHITCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteHITCommandInput, DeleteHITCommandOutput>;
    private serialize;
    private deserialize;
}
