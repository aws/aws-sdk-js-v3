import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { UpdateExpirationForHITRequest, UpdateExpirationForHITResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateExpirationForHITCommandInput = UpdateExpirationForHITRequest;
export declare type UpdateExpirationForHITCommandOutput = UpdateExpirationForHITResponse & __MetadataBearer;
export declare class UpdateExpirationForHITCommand extends $Command<UpdateExpirationForHITCommandInput, UpdateExpirationForHITCommandOutput, MTurkClientResolvedConfig> {
    readonly input: UpdateExpirationForHITCommandInput;
    constructor(input: UpdateExpirationForHITCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateExpirationForHITCommandInput, UpdateExpirationForHITCommandOutput>;
    private serialize;
    private deserialize;
}
