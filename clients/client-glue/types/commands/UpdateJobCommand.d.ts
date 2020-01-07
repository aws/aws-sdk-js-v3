import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateJobRequest, UpdateJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateJobCommandInput = UpdateJobRequest;
export declare type UpdateJobCommandOutput = UpdateJobResponse & __MetadataBearer;
export declare class UpdateJobCommand extends $Command<UpdateJobCommandInput, UpdateJobCommandOutput, GlueClientResolvedConfig> {
    readonly input: UpdateJobCommandInput;
    constructor(input: UpdateJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateJobCommandInput, UpdateJobCommandOutput>;
    private serialize;
    private deserialize;
}
