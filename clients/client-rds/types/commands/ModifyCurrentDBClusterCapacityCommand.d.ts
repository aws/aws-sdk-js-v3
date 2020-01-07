import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBClusterCapacityInfo, ModifyCurrentDBClusterCapacityMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyCurrentDBClusterCapacityCommandInput = ModifyCurrentDBClusterCapacityMessage;
export declare type ModifyCurrentDBClusterCapacityCommandOutput = DBClusterCapacityInfo & __MetadataBearer;
export declare class ModifyCurrentDBClusterCapacityCommand extends $Command<ModifyCurrentDBClusterCapacityCommandInput, ModifyCurrentDBClusterCapacityCommandOutput, RDSClientResolvedConfig> {
    readonly input: ModifyCurrentDBClusterCapacityCommandInput;
    constructor(input: ModifyCurrentDBClusterCapacityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyCurrentDBClusterCapacityCommandInput, ModifyCurrentDBClusterCapacityCommandOutput>;
    private serialize;
    private deserialize;
}
