import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { UpdateHITTypeOfHITRequest, UpdateHITTypeOfHITResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateHITTypeOfHITCommandInput = UpdateHITTypeOfHITRequest;
export declare type UpdateHITTypeOfHITCommandOutput = UpdateHITTypeOfHITResponse & __MetadataBearer;
export declare class UpdateHITTypeOfHITCommand extends $Command<UpdateHITTypeOfHITCommandInput, UpdateHITTypeOfHITCommandOutput, MTurkClientResolvedConfig> {
    readonly input: UpdateHITTypeOfHITCommandInput;
    constructor(input: UpdateHITTypeOfHITCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateHITTypeOfHITCommandInput, UpdateHITTypeOfHITCommandOutput>;
    private serialize;
    private deserialize;
}
