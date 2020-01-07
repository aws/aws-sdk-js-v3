import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { UpdateJobRequest, UpdateJobResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateJobCommandInput = UpdateJobRequest;
export declare type UpdateJobCommandOutput = UpdateJobResult & __MetadataBearer;
export declare class UpdateJobCommand extends $Command<UpdateJobCommandInput, UpdateJobCommandOutput, SnowballClientResolvedConfig> {
    readonly input: UpdateJobCommandInput;
    constructor(input: UpdateJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateJobCommandInput, UpdateJobCommandOutput>;
    private serialize;
    private deserialize;
}
