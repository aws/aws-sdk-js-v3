import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateCloudFormationStackRequest, CreateCloudFormationStackResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateCloudFormationStackCommandInput = CreateCloudFormationStackRequest;
export declare type CreateCloudFormationStackCommandOutput = CreateCloudFormationStackResult & __MetadataBearer;
export declare class CreateCloudFormationStackCommand extends $Command<CreateCloudFormationStackCommandInput, CreateCloudFormationStackCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CreateCloudFormationStackCommandInput;
    constructor(input: CreateCloudFormationStackCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCloudFormationStackCommandInput, CreateCloudFormationStackCommandOutput>;
    private serialize;
    private deserialize;
}
