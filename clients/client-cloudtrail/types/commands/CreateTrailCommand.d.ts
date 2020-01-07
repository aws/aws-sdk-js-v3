import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { CreateTrailRequest, CreateTrailResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTrailCommandInput = CreateTrailRequest;
export declare type CreateTrailCommandOutput = CreateTrailResponse & __MetadataBearer;
export declare class CreateTrailCommand extends $Command<CreateTrailCommandInput, CreateTrailCommandOutput, CloudTrailClientResolvedConfig> {
    readonly input: CreateTrailCommandInput;
    constructor(input: CreateTrailCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudTrailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTrailCommandInput, CreateTrailCommandOutput>;
    private serialize;
    private deserialize;
}
