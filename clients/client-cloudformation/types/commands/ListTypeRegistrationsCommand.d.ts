import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ListTypeRegistrationsInput, ListTypeRegistrationsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTypeRegistrationsCommandInput = ListTypeRegistrationsInput;
export declare type ListTypeRegistrationsCommandOutput = ListTypeRegistrationsOutput & __MetadataBearer;
export declare class ListTypeRegistrationsCommand extends $Command<ListTypeRegistrationsCommandInput, ListTypeRegistrationsCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: ListTypeRegistrationsCommandInput;
    constructor(input: ListTypeRegistrationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTypeRegistrationsCommandInput, ListTypeRegistrationsCommandOutput>;
    private serialize;
    private deserialize;
}
