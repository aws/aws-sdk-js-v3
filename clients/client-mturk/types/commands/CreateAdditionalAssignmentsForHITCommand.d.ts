import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { CreateAdditionalAssignmentsForHITRequest, CreateAdditionalAssignmentsForHITResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateAdditionalAssignmentsForHITCommandInput = CreateAdditionalAssignmentsForHITRequest;
export declare type CreateAdditionalAssignmentsForHITCommandOutput = CreateAdditionalAssignmentsForHITResponse & __MetadataBearer;
export declare class CreateAdditionalAssignmentsForHITCommand extends $Command<CreateAdditionalAssignmentsForHITCommandInput, CreateAdditionalAssignmentsForHITCommandOutput, MTurkClientResolvedConfig> {
    readonly input: CreateAdditionalAssignmentsForHITCommandInput;
    constructor(input: CreateAdditionalAssignmentsForHITCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAdditionalAssignmentsForHITCommandInput, CreateAdditionalAssignmentsForHITCommandOutput>;
    private serialize;
    private deserialize;
}
