import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DeleteCustomAvailabilityZoneMessage, DeleteCustomAvailabilityZoneResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteCustomAvailabilityZoneCommandInput = DeleteCustomAvailabilityZoneMessage;
export declare type DeleteCustomAvailabilityZoneCommandOutput = DeleteCustomAvailabilityZoneResult & __MetadataBearer;
export declare class DeleteCustomAvailabilityZoneCommand extends $Command<DeleteCustomAvailabilityZoneCommandInput, DeleteCustomAvailabilityZoneCommandOutput, RDSClientResolvedConfig> {
    readonly input: DeleteCustomAvailabilityZoneCommandInput;
    constructor(input: DeleteCustomAvailabilityZoneCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCustomAvailabilityZoneCommandInput, DeleteCustomAvailabilityZoneCommandOutput>;
    private serialize;
    private deserialize;
}
