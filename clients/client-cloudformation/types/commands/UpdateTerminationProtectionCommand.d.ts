import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { UpdateTerminationProtectionInput, UpdateTerminationProtectionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateTerminationProtectionCommandInput = UpdateTerminationProtectionInput;
export declare type UpdateTerminationProtectionCommandOutput = UpdateTerminationProtectionOutput & __MetadataBearer;
export declare class UpdateTerminationProtectionCommand extends $Command<UpdateTerminationProtectionCommandInput, UpdateTerminationProtectionCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: UpdateTerminationProtectionCommandInput;
    constructor(input: UpdateTerminationProtectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTerminationProtectionCommandInput, UpdateTerminationProtectionCommandOutput>;
    private serialize;
    private deserialize;
}
