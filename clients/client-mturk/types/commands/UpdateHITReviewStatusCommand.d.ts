import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { UpdateHITReviewStatusRequest, UpdateHITReviewStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateHITReviewStatusCommandInput = UpdateHITReviewStatusRequest;
export declare type UpdateHITReviewStatusCommandOutput = UpdateHITReviewStatusResponse & __MetadataBearer;
export declare class UpdateHITReviewStatusCommand extends $Command<UpdateHITReviewStatusCommandInput, UpdateHITReviewStatusCommandOutput, MTurkClientResolvedConfig> {
    readonly input: UpdateHITReviewStatusCommandInput;
    constructor(input: UpdateHITReviewStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateHITReviewStatusCommandInput, UpdateHITReviewStatusCommandOutput>;
    private serialize;
    private deserialize;
}
