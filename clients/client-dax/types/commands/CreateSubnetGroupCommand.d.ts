import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { CreateSubnetGroupRequest, CreateSubnetGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSubnetGroupCommandInput = CreateSubnetGroupRequest;
export declare type CreateSubnetGroupCommandOutput = CreateSubnetGroupResponse & __MetadataBearer;
export declare class CreateSubnetGroupCommand extends $Command<CreateSubnetGroupCommandInput, CreateSubnetGroupCommandOutput, DAXClientResolvedConfig> {
    readonly input: CreateSubnetGroupCommandInput;
    constructor(input: CreateSubnetGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DAXClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSubnetGroupCommandInput, CreateSubnetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
