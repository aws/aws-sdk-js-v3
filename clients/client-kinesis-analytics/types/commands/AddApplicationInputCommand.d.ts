import { KinesisAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsClient";
import { AddApplicationInputRequest, AddApplicationInputResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddApplicationInputCommandInput = AddApplicationInputRequest;
export declare type AddApplicationInputCommandOutput = AddApplicationInputResponse & __MetadataBearer;
export declare class AddApplicationInputCommand extends $Command<AddApplicationInputCommandInput, AddApplicationInputCommandOutput, KinesisAnalyticsClientResolvedConfig> {
    readonly input: AddApplicationInputCommandInput;
    constructor(input: AddApplicationInputCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddApplicationInputCommandInput, AddApplicationInputCommandOutput>;
    private serialize;
    private deserialize;
}
