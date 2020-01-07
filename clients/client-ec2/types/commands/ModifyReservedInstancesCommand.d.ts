import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyReservedInstancesRequest, ModifyReservedInstancesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyReservedInstancesCommandInput = ModifyReservedInstancesRequest;
export declare type ModifyReservedInstancesCommandOutput = ModifyReservedInstancesResult & __MetadataBearer;
export declare class ModifyReservedInstancesCommand extends $Command<ModifyReservedInstancesCommandInput, ModifyReservedInstancesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyReservedInstancesCommandInput;
    constructor(input: ModifyReservedInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyReservedInstancesCommandInput, ModifyReservedInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
