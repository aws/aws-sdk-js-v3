import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreatePlacementGroupRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreatePlacementGroupCommandInput = CreatePlacementGroupRequest;
export declare type CreatePlacementGroupCommandOutput = __MetadataBearer;
export declare class CreatePlacementGroupCommand extends $Command<CreatePlacementGroupCommandInput, CreatePlacementGroupCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreatePlacementGroupCommandInput;
    constructor(input: CreatePlacementGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePlacementGroupCommandInput, CreatePlacementGroupCommandOutput>;
    private serialize;
    private deserialize;
}
