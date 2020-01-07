import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { CreateOrUpdateTagsType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateOrUpdateTagsCommandInput = CreateOrUpdateTagsType;
export declare type CreateOrUpdateTagsCommandOutput = __MetadataBearer;
export declare class CreateOrUpdateTagsCommand extends $Command<CreateOrUpdateTagsCommandInput, CreateOrUpdateTagsCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: CreateOrUpdateTagsCommandInput;
    constructor(input: CreateOrUpdateTagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateOrUpdateTagsCommandInput, CreateOrUpdateTagsCommandOutput>;
    private serialize;
    private deserialize;
}
