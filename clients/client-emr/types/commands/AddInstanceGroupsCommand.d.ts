import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { AddInstanceGroupsInput, AddInstanceGroupsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddInstanceGroupsCommandInput = AddInstanceGroupsInput;
export declare type AddInstanceGroupsCommandOutput = AddInstanceGroupsOutput & __MetadataBearer;
export declare class AddInstanceGroupsCommand extends $Command<AddInstanceGroupsCommandInput, AddInstanceGroupsCommandOutput, EMRClientResolvedConfig> {
    readonly input: AddInstanceGroupsCommandInput;
    constructor(input: AddInstanceGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddInstanceGroupsCommandInput, AddInstanceGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
